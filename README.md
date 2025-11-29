# Sweco DevOps Demo

This demo shows a CI/CD pipeline using GitHub Actions that builds and pushes a Docker image to GHCR,
then deploys to a k3s cluster on an Azure Ubuntu VM via SSH.

See folders:
- app/        Node app + Dockerfile + tests
- k8s/        Kubernetes manifests
- ansible/    Ansible playbook to provision the Azure VM

## Quick start
1. Create SSH key pair (see scripts/prepare-ssh.sh)
2. Update ansible/inventory.ini with your VM IP and user
3. Run Ansible from WSL to provision k3s:
   ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -i ansible/inventory.ini ansible/playbook.yaml --become
