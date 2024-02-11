#!/bin/bash
echo $HEADERS
if [[ $HEADERS == *"auth"* ]]; then
  echo "It's there!"
fi
  echo 'none'