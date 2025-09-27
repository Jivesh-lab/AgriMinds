import Header from '../Header';

export default function HeaderExample() {
  // todo: remove mock data
  const mockUser = {
    name: "John Farmer",
    email: "john@example.com",
    avatar: undefined
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        user={mockUser}
        notifications={3}
        onLogout={handleLogout}
      />
      <div className="p-6">
        <p className="text-muted-foreground">Content area below header...</p>
      </div>
    </div>
  );
}