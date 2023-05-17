pipeline {
    agent none
    stages {
       stage('build') {
           agent {
                docker {
                    image 'node:latest'  
                } 
           }
           steps {
                 gitlabCommitStatus(name: 'build') {
                     sh 'echo "REACT_APP_API_BASE_URL=https://backend.Cyberhive.com/api/" > .env'
                     sh 'yarn'
                     sh 'CI=false yarn build'
                 }
           }
       }
       stage(deploy) {
           agent any
           steps {
               gitlabCommitStatus(name: 'deploy') {
                   sshagent(credentials : ['CYBERHIVE']) {
                        sh 'ssh -o StrictHostKeyChecking=no ucurs@ucurs.com -p 6969 uptime'
                        sh "rsync -rav -e 'ssh -p 6969' --delete-before build/ ucurs@ucurs.com:/home/ucurs/prod/projects/cyberhive_fe/"

                    }
               }
           }
       }
    }
 }
