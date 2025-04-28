#![deny(clippy::all)]

use serde::{Deserialize, Serialize};
use std::fs;

#[macro_use]
extern crate napi_derive;

#[derive(Debug, Serialize, Deserialize, Clone)]
struct Item {
    #[serde(skip_deserializing, skip_serializing)]
    _id: u32,
    #[serde(skip_deserializing, skip_serializing)]
    _name: String,
    score: u32,
}

#[napi]
pub fn highscore() -> u32 {
    let file_contents = fs::read_to_string("data.json").unwrap();
    let data: Vec<Item> = serde_json::from_str(&file_contents).unwrap();

    data.iter().max_by_key(|item| item.score).unwrap().score
}
