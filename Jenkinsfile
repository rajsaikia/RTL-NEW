pipeline{
    agent any
    tools {
        nodejs 'node-20.10.0'
    }
    stages{
        stage("Build"){
            steps{
                bat "npm install"
                bat "npm run build:dev"
            }
        }

        stage("Deploy"){
            steps{
                bat """aws s3 rm s3://moei-fuel-pricing-app --recursive  --include="*.*" """
                bat """aws s3 cp dist/ s3://moei-fuel-pricing-app --recursive """
            }
        }
    }
}

