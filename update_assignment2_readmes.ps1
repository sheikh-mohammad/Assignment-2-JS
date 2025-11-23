# PowerShell script to update all README.md files in Assignment 2
# This script will remove contribution sections and add assignment notice

# Define the assignment 2 directory
$assignment2Dir = "G:\Saylani Mass IT Training\Techno Kids Batch 7\JavaScript\Assignment\Assignment 2"

# Find all README.md files in the assignment 2 directory and subdirectories
$readmeFiles = Get-ChildItem -Path $assignment2Dir -Name "README.md" -Recurse

Write-Host "Found $($readmeFiles.Count) README.md files to update"

# Text to replace (contribution sections)
$contributionPatterns = @(
    # Pattern 1: Standard contribution format
    @("\#\# Contributing\R?\n\s*1\.\s*Fork.*?Open a pull request\R?\n", [System.Text.RegularExpressions.RegexOptions]::Singleline),

    # Pattern 2: Longer contribution format
    @("\#\# Contributing\R?\n.*?follow standard GitHub contribution practices:.*?pull request with a clear description\R?\n", [System.Text.RegularExpressions.RegexOptions]::Singleline)
)

# Replacement text
$newSection = @"
## Assignment Notice
This is a personal assignment for the Saylani Mass IT Training Program. No contributions from external parties are allowed.
"@

foreach ($file in $readmeFiles) {
    $fullPath = Join-Path $assignment2Dir $file
    Write-Host "Processing: $fullPath"
    
    # Read the content of the file
    $content = Get-Content -Path $fullPath -Raw
    
    # Flag to check if content was modified
    $modified = $false
    
    # Apply each replacement pattern
    foreach ($pattern in $contributionPatterns) {
        $regexPattern = $pattern[0]
        $regexOptions = $pattern[1]
        
        $regex = [System.Text.RegularExpressions.Regex]::new($regexPattern, $regexOptions)
        
        if ($regex.IsMatch($content)) {
            Write-Host "  - Found and replacing contribution section"
            $content = $regex.Replace($content, $newSection + "`n`n")
            $modified = $true
        }
    }
    
    # If content was modified, write it back to the file
    if ($modified) {
        Set-Content -Path $fullPath -Value $content -Encoding UTF8
        Write-Host "  - Updated file: $fullPath"
    } else {
        Write-Host "  - No contribution section found in: $file"
    }
}

Write-Host "All README.md files have been processed."
Write-Host "Now performing git operations..."

# Change directory to assignment 2
Set-Location $assignment2Dir

# Add all modified files
git add .

# Commit the changes
git commit -m "Remove contribution details from all README files - Assignment is for personal use only"

# Push the changes
git push

Write-Host "All files have been updated, committed, and pushed to the repository."