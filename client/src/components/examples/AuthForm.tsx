import AuthForm from '../AuthForm';

export default function AuthFormExample() {
  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
  };

  const handleRegister = (data: any) => {
    console.log('Register attempt:', data);
  };

  return (
    <AuthForm 
      onLogin={handleLogin}
      onRegister={handleRegister}
    />
  );
}