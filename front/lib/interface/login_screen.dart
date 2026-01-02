import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/auth_controller.dart';
import '../models/login_request.dart';
import 'register_screen.dart';

class LoginScreen extends StatelessWidget {
  LoginScreen({super.key});

  final AuthController controller = Get.find<AuthController>();

  final usernameCtrl = TextEditingController();
  final passwordCtrl = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Đăng nhập")),
      body: Padding(
        padding: const EdgeInsets.all(16),

        child: Column(
          children: [
            TextField(
              controller: usernameCtrl,
              decoration: const InputDecoration(labelText: "Nhập Tên Tài Khoản"),
            ),
            TextField(
              controller: passwordCtrl,
              obscureText: true,
              decoration: const InputDecoration(labelText: "Mật khẩu"),
            ),
            const SizedBox(height: 20),

            Obx(() => ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.green,
                foregroundColor: Colors.black,
                minimumSize: const Size(double.infinity, 48),
              ),
              onPressed: controller.isLoading.value
                  ? null
                  : () {
                controller.login(
                  LoginRequest(
                    username: usernameCtrl.text,
                    password: passwordCtrl.text,
                  ),
                );
              },
              child: controller.isLoading.value
                  ? const CircularProgressIndicator(color: Colors.white)
                  : const Text("Đăng nhập"),
            )),

            TextButton(
              style: TextButton.styleFrom(
                foregroundColor: Colors.blue,
              ),
              onPressed: () {
                Get.to(() => RegisterScreen());
              },
              child: const Text("Chưa có tài khoản? Đăng ký"),
            ),
          ],
        ),
      ),
    );
  }
}
