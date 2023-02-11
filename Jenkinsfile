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
      steps{
        bat 'docker login --username "jatin1008" --password "Suntu@1008"'
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