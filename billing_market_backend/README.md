#Step to run backend project

step 1: git clone <REPOSITORY_ADDRESS>

step 2: pip install -r requirements.txt

step 3: settings.py

        from pathlib import Path #(line 13)
        import os
        import environ

        env = environ.Env()
        environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

step 4: create .env file
        add SECRET_KEY
        