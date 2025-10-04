pipeline {
    agent any   // Run on any available Jenkins agent

        environment {
        PATH = "/Users/dilshadahmad/.nvm/versions/node/v18.20.3/bin:${env.NodeJS_PATH}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Pull code from your Git repo
                git branch: 'main', url: 'https://github.com/dilshad-ahmad-actyv/learn-jenkins.git'
            }
        }

        stage('Install') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Optional: if you had build steps (e.g., transpile TypeScript, bundle frontend)
                echo 'Build step (not needed for simple Express app)'
            }
        }

        stage('Test') {
            steps {
                // Run tests (make sure you have a test script in package.json)
                sh 'npm test || echo "No tests found, skipping..."'
            }
        }

        stage('Deploy') {
            steps {
                // Simplest: start the app (replace with your real deployment process)
                sh 'pm2 restart all || pm2 start ./bin/www --name nodejs-express'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline succeeded!'
        }
    }
}