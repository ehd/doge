#!/bin/bash
# -*- coding: utf-8, tab-width: 2 -*-
SELFPATH="$(readlink -m "$0"/..)"


function main () {
  local DICTS=( "$@" )
  [ -n "${DICTS[*]}" ] || DICTS=( "$SELFPATH"/* )
  local WORDS=( $(grep "${DICTS[@]}" -hoPie '(^|.)[a-z][a-z0-9_]{2,20}[a-z]' \
    | sed -re '
      s~^\\x[0-9a-fA-F]{2}~ ~
      s~^\\u[0-9a-fA-F]{4}~ ~
      s~^\\U[0-9a-fA-F]{8}~ ~
      s~^\\[a-z]~ ~
      s~^[^A-Za-z ]~~    # incl. &html;
      s~^ ~~
    ' | tr 'A-Z_' 'a-z ' | sort -u) )
  exec nodejs "$SELFPATH"/such-cmd.js "${WORDS[@]}"
}






main "$@"; exit $?
