class AuthResponse {
  final int err;
  final String message;
  final String? accessToken;
  final Map<String, dynamic>? data;

  AuthResponse({
    required this.err,
    required this.message,
    this.accessToken,
    this.data,
  });

  factory AuthResponse.fromJson(Map<String, dynamic> json) {
    print("Raw JSON: $json");

    return AuthResponse(
      err: json['err'] is int ? json['err'] as int : -1,
      message: json['message']?.toString() ?? "",
      accessToken: json['access_token'] is String
          ? json['access_token'] as String
          : null,

      // Sửa từ 'data' thành 'user'
      data: json['user'] is Map<String, dynamic>
          ? Map<String, dynamic>.from(json['user'])
          : (json['data'] is Map<String,
          dynamic> // fallback cho register nếu dùng 'data'
          ? Map<String, dynamic>.from(json['data'])
          : null),
    );
  }
}