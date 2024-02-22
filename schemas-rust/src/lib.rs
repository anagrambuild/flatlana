pub mod flatlana_instruction_generated;
pub mod tweedle_dee_generated;
pub mod tweedle_dum_generated;
use error::FlatlanaSchemaError;
use flatlana_instruction_generated::{root_as_flatlana_instruction, FlatlanaInstruction};
pub mod error;
pub fn parse_ix_data<'a>(ix_data: &'a [u8]) -> Result<FlatlanaInstruction, FlatlanaSchemaError> {
    let instruction = root_as_flatlana_instruction(ix_data)
        .map_err(|_| FlatlanaSchemaError::InvalidInstruction)?;
    Ok(instruction)
}