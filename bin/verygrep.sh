#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-
SELFPATH="$(readlink -m "$0"/..)"


function main () {
  local DICTS=( "$@" )
  [ -n "${DICTS[*]}" ] || DICTS=( "$SELFPATH"/* )
  local WORDS=( $(grep "${DICTS[@]}" -hoPie '[a-z][a-z0-9_]{2,20}[a-z]' \
    | tr 'A-Z_' 'a-z ' | sort -u) )
  exec nodejs "$SELFPATH"/such-cmd.js "${WORDS[@]}"
}






main "$@"; exit $?
