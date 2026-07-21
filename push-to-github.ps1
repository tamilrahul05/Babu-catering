cd 'd:\Frontend\Project\catering'
Write-Host "Current directory: $(Get-Location)" -ForegroundColor Green
Write-Host "Checking git status..." -ForegroundColor Cyan
git status
Write-Host "`nStagging all files..." -ForegroundColor Cyan
git add .
Write-Host "`nCreating commit..." -ForegroundColor Cyan
git commit -m "Initial commit: BABU Catering project" 2>&1
Write-Host "`nSetting main branch..." -ForegroundColor Cyan
git branch -M main
Write-Host "`nConfiguring remote..." -ForegroundColor Cyan
git remote remove origin 2>&1
git remote add origin https://github.com/tamilrahul05/Babu-catering.git
git remote -v
Write-Host "`nPushing to GitHub..." -ForegroundColor Cyan
git push -u origin main 2>&1
Write-Host "`nDone!" -ForegroundColor Green
