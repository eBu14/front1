import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import SignInWithOAuth from './components/SignInWithOAuth';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInResponse = await signIn.create({
        identifier: username,
        password,
        strategy: 'password',
      });
      setActive({ session: signInResponse.createdSessionId });
      router.push('/(app)/(tabs)');
    } catch (err: unknown) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignContent: 'center', gap: 20, padding: 20 }}>
      <View>
        <Text style={{ color: 'white', fontSize: 36, textAlign: 'center', margin: 40 }}>
          Sign In
        </Text>
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 7,
            padding: 20,
            color: 'white',
          }}
          placeholderTextColor={'white'}
          autoCapitalize="none"
          value={username}
          placeholder="Username..."
          onChangeText={(input) => setUsername(input)}
        />
      </View>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 7,
            padding: 20,
            color: 'white',
          }}
          placeholderTextColor={'white'}
          autoCapitalize="none"
          secureTextEntry
          value={password}
          placeholder="Password..."
          onChangeText={(input) => setPassword(input)}
        />
      </View>

      <TouchableOpacity
        onPress={onSignInPress}
        style={{ padding: 20, backgroundColor: 'grey', borderRadius: 10 }}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Sign in</Text>
      </TouchableOpacity>
      <SignInWithOAuth />
      <Text style={{ textAlign: 'right', color: 'grey' }}>
        Not have account{' '}
        <Link style={{ color: 'white', fontWeight: '500' }} href={'/sign-up'}>
          Register
        </Link>
      </Text>
    </View>
  );
}
