Simple gulp task for generating .po-files from angular-translate JSON files.
 
# Example
Assuming a local file `en.json` with valid JSON

```javascript
gulp.task('build', function() {
    return gulp.src('en.json')
      .pipe(json2po('template_en.po'))
      .pipe(gulp.dest('.'))
});
```

# API
```json2po([properties, ] filename)```  

Properties header information that will be merged with the default values into the resulting .po-file.
 
 Current default values:

```json
 {
    "Project-Id-Version": "Sample Project",
    "POT-Creation-Date": "${today}",
    "PO-Revision-Date": "${today}",
    "Last-Translator": "",
    "Language-Team": "",
    "MIME-Version": "1.0",
    "Content-Type": "text/plain; charset=utf-8",
    "Content-Transfer-Encoding": "8bit",
    "Language": "no",
    "X-Generator": "None"
 }
```
