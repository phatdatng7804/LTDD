import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/register_request.dart';
import '../models/login_request.dart';
import '../models/auth_response.dart';
import '../config/api_config.dart';

abstract class AuthService {
  Future<AuthResponse> register(RegisterRequest request);
  Future<AuthResponse> login(LoginRequest request);
}

class AuthServiceImpl implements AuthService {
  @override
  Future<AuthResponse> register(RegisterRequest request) async {
    final response = await http
        .post(
      Uri.parse("${ApiConfig.baseUrl}/register"),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: jsonEncode(request.toJson()),
    )
        .timeout(const Duration(seconds: 8));

    if (response.statusCode != 200 && response.statusCode != 201) {
      throw Exception("Register failed: ${response.body}");
    }

    final decoded = jsonDecode(response.body);
    return AuthResponse.fromJson(decoded);
  }

  @override
  Future<AuthResponse> login(LoginRequest request) async {
    final response = await http
        .post(
      Uri.parse("${ApiConfig.baseUrl}/login"),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: jsonEncode(request.toJson()),
    )
        .timeout(const Duration(seconds: 8));

    if (response.statusCode != 200) {
      throw Exception("Login failed: ${response.body}");
    }

    final decoded = jsonDecode(response.body);
    return AuthResponse.fromJson(decoded);
  }
}
