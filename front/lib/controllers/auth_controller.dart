import 'package:get/get.dart';
import '../services/auth_service.dart';
import '../models/register_request.dart';
import '../models/login_request.dart';
import '../models/auth_response.dart';
import '../interface/home_screen.dart';

class AuthController extends GetxController {
  final AuthService _authService = AuthServiceImpl();

  // STATE

  var isLoading = false.obs;

  var accessToken = RxnString(); // null hoặc token
  var userData = Rxn<Map<String, dynamic>>();

  bool get isLoggedIn => accessToken.value != null;


  // REGISTER

  Future<void> register(RegisterRequest request) async {
    if (isLoading.value) return;

    try {
      isLoading.value = true;
      final res = await _authService.register(request);

      if (res.err == 0) {
        _saveAuth(res);
        Get.snackbar("Thành công", res.message);
        Get.offAll(() => const HomeScreen());
      } else {
        Get.snackbar("Lỗi", res.message);
      }
    } catch (e) {
      Get.log("REGISTER ERROR: $e");
      Get.snackbar("Đăng ký thất bại", e.toString());
    } finally {
      isLoading.value = false;
    }
  }


  // LOGIN

  Future<void> login(LoginRequest request) async {
    if (isLoading.value) return;

    try {
      isLoading.value = true;
      final res = await _authService.login(request);

      if (res.err == 0) {
        _saveAuth(res);
        Get.snackbar("Đăng nhập", res.message);
        Get.offAll(() => const HomeScreen());
      } else {
        Get.snackbar("Thất bại", res.message);
      }
    } catch (e) {
      Get.snackbar("Lỗi mạng", "Không kết nối được server");
    } finally {
      isLoading.value = false;
    }
  }


  // SAVE AUTH INFO

  void _saveAuth(AuthResponse res) {
    print("=== AUTH RESPONSE ===");
    print("err: ${res.err}");
    print("message: ${res.message}");
    print("accessToken: ${res.accessToken}");
    print("data: ${res.data}");
    print("====================");

    accessToken.value = res.accessToken;
    userData.value = res.data;
  }
  // LOGOUT

  void logout() {
    accessToken.value = null;
    userData.value = null;

    Get.offAllNamed('/');
  }
}