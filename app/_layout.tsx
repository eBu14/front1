import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Slot } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const RootLayoutNav: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://backend-w1ri.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });

  const tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        return;
      }
    },
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'black' }}>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={'pk_test_ZW1lcmdpbmctZ3J1Yi03Mi5jbGVyay5hY2NvdW50cy5kZXYk'}>
        <ApolloProvider client={client}>
          <Slot />
        </ApolloProvider>
      </ClerkProvider>
    </KeyboardAvoidingView>
  );
};

export default RootLayoutNav;
