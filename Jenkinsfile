pipeline {
  agent any

  tools {
    nodejs 'node26' // Nombre exacto configurado en Jenkins > Global Tool Configuration
    allure 'allure' // Nombre exacto configurado para Allure
  }

  options {
    timeout(time: 20, unit: 'MINUTES')
  }

  environment {
    TEST_CREDS = credentials('e2e-test-user')
    PLAYWRIGHT_BROWSERS_PATH = "${env.WORKSPACE}\\playwright-browsers"
  }

  stages {
    stage('Build') {
      steps {
        bat '''
          @echo off
          setlocal
          set "PLAYWRIGHT_BROWSERS_PATH=%WORKSPACE%\\playwright-browsers"
          npm ci
          npx playwright install chromium
          endlocal
        '''
      }
    }

    stage('Test') {
      steps {
        bat '''
          @echo off
          setlocal
          set "PLAYWRIGHT_BROWSERS_PATH=%WORKSPACE%\\playwright-browsers"
          set "TEST_USER_NAME=%TEST_CREDS_USR%"
          set "TEST_PASSWORD=%TEST_CREDS_PSW%"
          npm run test:make-apt
          endlocal
        '''
      }

      post {
        always {
          allure includeProperties: false,
                 jdk: '',
                 results: [[path: 'allure-results']],
                 reportBuildPolicy: 'ALWAYS'
        }
      }
    }
  }
}
