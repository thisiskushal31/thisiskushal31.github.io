const { exec } = require('child_process');
const path = require('path');

const repoPath = path.join(__dirname, '..', '..'); // Adjust the path to your repository
const commitMessage = 'Deploying updated files';

function deploy() {
    exec(`git add .`, { cwd: repoPath }, (err) => {
        if (err) {
            console.error(`Error adding files: ${err}`);
            return;
        }
        exec(`git commit -m "${commitMessage}"`, { cwd: repoPath }, (err) => {
            if (err) {
                console.error(`Error committing files: ${err}`);
                return;
            }
            exec(`git push`, { cwd: repoPath }, (err) => {
                if (err) {
                    console.error(`Error pushing to repository: ${err}`);
                    return;
                }
                console.log('Deployment successful!');
            });
        });
    });
}

deploy();