use thiserror::Error;

#[derive(Error, Debug, PartialEq, Eq)]
pub enum FlatlanaSchemaError {
    #[error("Invalid Instruction")]
    InvalidInstruction,
}
