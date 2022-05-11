#!/bin/sh

URL="http://localhost:8034"
REPORT_DIR="./reports/"
REPORT_FILE="lighthouse.html"

[ ! -e "$REPORT_DIR" ] && mkdir "$REPORT_DIR"
lighthouse "$URL" --view --quiet --chrome-flags='--headless' --output-path="$REPORT_DIR$REPORT_FILE"
