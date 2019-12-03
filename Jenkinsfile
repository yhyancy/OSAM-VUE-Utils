#!/usr/bin/env groovy
pipeline {
	agent any
    stages {
        stage('Build') { 
            steps { 
                sh 'npm install'
                sh 'npm run build:stage'
                // archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
        stage('Backup') {
            steps {
                echo 'backup start'
                // sh 'mkdir /home/mesadmin/osam/$(date +%d%h%s)'
                sh 'mv /home/mesadmin/osam/dist /home/mesadmin/osam/backups/$(date +%d%h%s)'
                echo 'backup done'
                
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy start'
                sh 'cp -r /var/lib/jenkins/workspace/osam_fe_UAT/dist /home/mesadmin/osam/dist'
                echo 'Deploy done'
            }
        }

        
    }

    post {
        always {
            echo 'build and deploy finished'
        }
        failure {
            echo 'build failed'
        }
    }
}