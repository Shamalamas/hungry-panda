import { SignInPage } from '@toolpad/core/SignInPage';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useTheme } from '@mui/material/styles';

const providers = [
  { id: 'email', name: 'Email' },
];

async function signIn({ providerId, email, password, ...rest } = {}) {
  console.log('signIn called', { providerId, email, password, ...rest });
  return { success: true };
}

export default function MagicLinkAlertSignInPage() {
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false }, form: { noValidate: true } }}
      />
    </AppProvider>
  );
}


