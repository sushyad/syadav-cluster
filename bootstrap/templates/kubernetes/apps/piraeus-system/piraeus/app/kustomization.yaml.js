---
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - ./kustomize.yaml
  - ./talos-loader-override.yaml
