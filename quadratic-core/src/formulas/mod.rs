use crate::Pos;
use ast::AstNode;

#[macro_use]
mod errors;
mod ast;
mod cell_ref;
mod ctx;
pub mod functions;
mod grid_proxy;
mod lexer;
pub mod lsp;
mod parser;
mod span;
mod value;

pub use ast::Formula;
pub use cell_ref::*;
pub use ctx::Ctx;
pub use errors::{FormulaError, FormulaErrorMsg};
pub use grid_proxy::GridProxy;
pub use parser::{find_cell_references, parse_formula};
pub use span::{Span, Spanned};
pub use value::Value;

/// Result of a `FormulaError`.
pub type FormulaResult<T = Value> = Result<T, FormulaError>;

#[cfg(test)]
mod tests;
