import subprocess
import os

def run_git_command(command):
  """Runs a Git command in Windows CMD.

  Args:
    command: The Git command to run.

  Returns:
    The output of the Git command.
  """

  process = subprocess.Popen(
    command,
    shell=True,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
  )
  output, error = process.communicate()
  return output.decode("utf-8"), error.decode("utf-8")

def main():
  """Runs the main function.
  """

  name_of_commit='react native folder initialized'
  # Get the current directory.
  current_directory = os.getcwd()

  # Run the `git status` command.
  message = run_git_command("git add .")
  print(message)
  message =run_git_command(f"git commit -m {name_of_commit}")
  print(message)
  message =run_git_command("git push")
  print(message)
  
if __name__ == "__main__":
  main()
