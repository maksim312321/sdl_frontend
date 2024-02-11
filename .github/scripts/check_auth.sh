#!/bin/bash
var1 = curl -s 'https://api.github.com/users/lambda' | jq -r $HEADERS
echo $var1