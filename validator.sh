#!/bin/bash
cargo build-sbf && solana-test-validator --rpc-pubsub-enable-block-subscription --bpf-program fLatK5NbbRdgjLJ9vAJqUP9VWJZcomvqcbsrsLPLK2R target/deploy/flatlana_program.so -r