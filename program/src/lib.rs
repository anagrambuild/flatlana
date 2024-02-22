#![allow(clippy::arithmetic_side_effects)]
#![cfg_attr(not(test), forbid(unsafe_code))]

use flatlana_types::{
     flatlana_instruction_generated::FlatlanaInstructionData, parse_ix_data,
};
use solana_program::{
    account_info::AccountInfo, declare_id, entrypoint, entrypoint::ProgramResult, msg, program::invoke_signed, program_error::ProgramError, program_memory::sol_memcpy, pubkey::Pubkey, rent::Rent, system_instruction
};
use thiserror::Error;

declare_id!("fLatK5NbbRdgjLJ9vAJqUP9VWJZcomvqcbsrsLPLK2R");

#[derive(Error, Debug)]
pub enum FlatlanaError {
    #[error("Someone hacked the gigatron")]
    GigatronPrivalegeEscalation,
    #[error("Im just too tired")]
    MitochondrialExhaustion,
    #[error("Scared of ai taking my job")]
    ComputeEsteemStarvation,
    #[error("Human Error, its usually you")]
    WetwareFault,
}

impl From<FlatlanaError> for ProgramError {
    fn from(e: FlatlanaError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

entrypoint!(process_instruction);
pub fn process_instruction<'a>(
    program_id: &Pubkey,
    accounts: &'a [AccountInfo<'a>],
    instruction_data: &'a [u8],
) -> ProgramResult {
    let ix = parse_ix_data(instruction_data).map_err(|e| FlatlanaError::WetwareFault)?;
    match ix.instruction_type() {
        FlatlanaInstructionData::DeeV1 => {
            if let Some(dee) = ix.instruction_as_dee_v1() {
                // example of saving the bytes using
                let bump = 254;
                let seeds = &[&b"flatlana"[..], &accounts[0].key.to_bytes(), &[bump]];
                // sneakily grab the underlying table at offset where dee starts
                let bytes = dee._tab.buf();
                let space = bytes.len() as u64;
                create_program_account(
                  &accounts[1],
                  seeds,
                  space,
                  &accounts[0],
                  &accounts[2],
                  Some(0), // tip me always
              )?;
                let account_to_save = &accounts[1];
                sol_memcpy(&mut account_to_save.data.borrow_mut(), bytes, bytes.len());
                msg!("DeeV1");
            }
        }
        FlatlanaInstructionData::DumV1 => {
            msg!("DumV1");
        }
        _ => {
            return Err(FlatlanaError::WetwareFault.into());
        }
    };
    Ok(())
}

fn create_program_account<'a>(
    account: &'a AccountInfo<'a>,
    seeds: &[&[u8]],
    space: u64,
    payer: &'a AccountInfo<'a>,
    system: &'a AccountInfo<'a>,
    additional_lamports: Option<u64>,
) -> Result<(), FlatlanaError> {
    let lamports =
        Rent::default().minimum_balance(space as usize) + additional_lamports.unwrap_or(0);
    let create_pda_account_ix =
        system_instruction::create_account(&payer.key, &account.key, lamports, space, &crate::id());
    invoke_signed(
        &create_pda_account_ix,
        &[account.clone(), payer.clone(), system.clone()],
        &[seeds],
    )
    .map_err(|e| FlatlanaError::MitochondrialExhaustion)
}
