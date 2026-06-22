#!/bin/bash

REPORT_FILE="YassinOsman_bash_report.txt"
> "$REPORT_FILE"

echo "==========================================" | tee -a "$REPORT_FILE"
echo "        NEW LEARNING COMMENTS REPORT       " | tee -a "$REPORT_FILE"
echo "==========================================" | tee -a "$REPORT_FILE"

# Count and immediately strip any hidden Windows carriage returns using tr -d
HTML_COUNT=$(grep -ci "new:" index.html 2>/dev/null | tr -d '\r' || echo 0)
echo "HTML File (index.html): $HTML_COUNT new comments" | tee -a "$REPORT_FILE"

CSS_COUNT=$(grep -ci "new:" style.css 2>/dev/null | tr -d '\r' || echo 0)
echo "CSS File (style.css): $CSS_COUNT new comments" | tee -a "$REPORT_FILE"

JS_COUNT=$(grep -ci "new:" app.js 2>/dev/null | tr -d '\r' || echo 0)
echo "JavaScript File (app.js): $JS_COUNT new comments" | tee -a "$REPORT_FILE"

# Now the numbers are perfectly clean, so math will work flawlessly!
TOTAL_COUNT=$((HTML_COUNT + CSS_COUNT + JS_COUNT))

echo "------------------------------------------" | tee -a "$REPORT_FILE"
echo "TOTAL NEW COMMENTS ACROSS ALL FILES: $TOTAL_COUNT" | tee -a "$REPORT_FILE"
echo "==========================================" | tee -a "$REPORT_FILE"

echo ""
echo "Success! Report saved to $REPORT_FILE"