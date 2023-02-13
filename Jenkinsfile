pipeline {
  agent any
  stages 
  {
    stage('Remove old deployment') 
    {
      steps {
        bat 'docker-compose down '
        }
    }       
    stage('Build updated image')//for local test 
    {
          steps {
            bat 'docker-compose build --no-cache '
          }
    }
    stage('Localy Deploy the new build')
    {
          steps {
            bat 'docker-compose up -d'
          }
    }
    stage('dockerhub login'){
      withCredentials
      steps{
        
        withCredentials([usernamePassword(credentialsId: 'c204344a-b88c-4279-b0e3-eb4fb875c750', passwordVariable: 'pass', usernameVariable: 'user')]) {
          bat 'docker login --username $user --password $pass'
          }
      }
      
    }
    
    stage('Pushing to docker hub')
    {
      steps{
        bat 'docker push jatin1008/react'
      }
    }
     
    
  }
}