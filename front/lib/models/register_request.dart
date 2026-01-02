class RegisterRequest {
  final String username;
  final String fullname;
  final String email;
  final String password;

  RegisterRequest({
    required this.username,
    required this.fullname,
    required this.email,
    required this.password,
  });

  Map<String, dynamic> toJson() => {
    "username": username,
    "full_name": fullname,
    "email": email,
    "password": password,
  };
}
