# gcloud iam service-accounts add-iam-policy-binding "cloudrunserviceaccount@logesh-all-test.iam.gserviceaccount.com@logesh-all-test.iam.gserviceaccount.com" \ --project="logesh-all-test" \ --role="roles/iam.workloadIdentityUser" \ --member="principalSet://iam.googleapis.com/projects/462199367704/locations/global/workloadIdentityPools/my-pool/attribute.repository/logeshkumarasamy98/actiontest"



# principal://iam.googleapis.com/projects/462199367704/locations/global/workloadIdentityPools/my-pool/subject/SUBJECT_ATTRIBUTE_VALUE



#   gcloud iam workload-identity-pools create "my-pool" \ --project="logesh-all-test" \ --location="global" \ --display-name="Demo pool"

#   gcloud iam workload-identity-pools providers create-oidc "my-provider" \
# --project="logesh-all-test" \
# --location="global" \
# --workload-identity-pool="my-pool" \
# --display-name="Demo provider" \
# --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.ref=assertion.ref,attribute.repository_owner=assertion.repository_owner" \
# --attribute-condition="assertion.repository_owner=='logeshkumarasamy98' && assertion.ref=='refs/heads/main'" \
# --issuer-uri="https://token.actions.githubusercontent.com"



# Create a Workload Identity Pool named "my-pool"
gcloud iam workload-identity-pools create "my-pool" \
  --project="logesh-all-test" \
  --location="global" \
  --display-name="Demo pool"



# Create an OIDC provider within the workload identity pool for GitHub Actions
gcloud iam workload-identity-pools providers create-oidc "my-provider" \
  --project="logesh-all-test" \
  --location="global" \
  --workload-identity-pool="my-pool" \
  --display-name="Demo provider" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.ref=assertion.ref,attribute.repository_owner=assertion.repository_owner" \
  --attribute-condition="assertion.repository_owner=='logeshkumarasamy98' && assertion.ref=='refs/heads/main'"
  

# Bind the Workload Identity Pool to your service account
gcloud iam service-accounts add-iam-policy-binding "cloudrunserviceaccount@logesh-all-test.iam.gserviceaccount.com" \
  --project="logesh-all-test" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/462199367704/locations/global/workloadIdentityPools/my-pool/attribute.repository/logeshkumarasamy98/actiontest"
