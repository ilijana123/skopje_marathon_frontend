
          {formError && (
            <AlertBox>
              <Alert severity="error" icon={<Error />}>
                {formError}
              </Alert>
            </AlertBox>
          )}

          {formSuccess && (
            <AlertBox>
              <Alert severity="success" icon={<CheckCircle />}>
                {formSuccess}
              </Alert>
            </AlertBox>
          )}

          {onRemove && (
            <RemoveButtonBox>
              <RemoveButton
                variant="contained"
                color="error"
                onClick={onRemove}
                startIcon={<Delete />}
              >
                Remove contestant
              </RemoveButton>
            </RemoveButtonBox>
          )}
        </FormGrid>
        <RegisterContestantButtonBox>
          <RegisterContestantButton
              variant="contained"
          >
          РЕГИСТРИРАЈ УЧЕСНИК →
          </RegisterContestantButton>   
        </RegisterContestantButtonBox>
      </CardContent>
    </FormCard>
  );
};