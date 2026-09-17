# CURA Login Test Plan

## Application Overview

Explore the CURA Healthcare demo app and cover login happy path, invalid credentials, and empty-form validation.

## Test Scenarios

### 1. CURA Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Valid user login succeeds

**File:** `tests/demo/login.spec.ts`

**Steps:**
  1. Open the home page and click the Make Appointment link
    - expect: The login page loads and shows the login form
  2. Enter the valid demo username and password
    - expect: The form accepts the credentials
  3. Submit the login form
    - expect: The application redirects to the appointment page
    - expect: The Make Appointment heading is visible

#### 1.2. Invalid credentials are rejected

**File:** `tests/demo/login.spec.ts`

**Steps:**
  1. Enter an incorrect username and the correct password
    - expect: The form submits and remains on the login screen
  2. Check the login error message
    - expect: The error banner displays the invalid credentials message

#### 1.3. Blank credentials are rejected

**File:** `tests/demo/login.spec.ts`

**Steps:**
  1. Leave the username and password fields empty and click Login
    - expect: The login attempt is rejected
  2. Verify the form remains available for correction
    - expect: The user can still see the login fields and the error message
