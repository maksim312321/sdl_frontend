#!/bin/bash
value=($(jq -r '.auth' $HEADERS))
echo "${value[@]}"