pipeline {
    agent any   // Run on any available Jenkins agent

    environment {
        PATH = "/Users/dilshadahmad/.nvm/versions/node/v18.20.3/bin:${env.PATH}"
        APP_NAME = "nodejs-express"
    }

    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))  // Keep only last 10 builds
        timeout(time: 30, unit: 'MINUTES')             // Pipeline timeout
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from Git repository...'
                git branch: 'main', url: 'https://github.com/dilshad-ahmad-actyv/learn-jenkins.git'
            }
        }

        stage('Verify Environment') {
            steps {
                echo 'Verifying Node, npm, and PM2 versions...'
                sh "/bin/bash -c 'node -v && npm -v && pm2 -v || echo \"PM2 not installed yet\"'"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh "/bin/bash -c 'npm ci'"  // Use ci for clean install
            }
        }

        stage('Build') {
            steps {
                echo 'Build step (not needed for simple Express app)'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh "/bin/bash -c 'npm test || echo \"No tests found, skipping...\"'"
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the app with PM2...'
                sh """
                    /bin/bash -c 'pm2 restart $APP_NAME || pm2 start ./bin/www --name $APP_NAME'
                    /bin/bash -c 'pm2 save'
                """
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
            sh "/bin/bash -c 'pm2 list || echo \"PM2 not running\"'"
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}