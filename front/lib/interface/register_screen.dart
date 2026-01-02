import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/auth_controller.dart';
import '../models/register_request.dart';

class RegisterScreen extends StatelessWidget {
  RegisterScreen({super.key});

  final AuthController controller = Get.find<AuthController>();

  final usernameCtrl = TextEditingController();
  final fullNameCtrl = TextEditingController();
  final emailCtrl = TextEditingController();
  final passwordCtrl = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Đăng ký")),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            TextField(
              controller: usernameCtrl,
              decoration: const InputDecoration(labelText: "Username"),
            ),
            TextField(
              controller: fullNameCtrl,
              decoration: const InputDecoration(labelText: "Họ tên"),
            ),
            TextField(
              controller: emailCtrl,
              decoration: const InputDecoration(labelText: "Email"),
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
                controller.register(
                  RegisterRequest(
                    username: usernameCtrl.text,
                    fullname: fullNameCtrl.text,
                    email: emailCtrl.text,
                    password: passwordCtrl.text,
                  ),
                );
              },
              child: controller.isLoading.value
                  ? const CircularProgressIndicator(color: Colors.white)
                  : const Text("Đăng ký"),
            )),
          ],
        ),
      ),
    );
  }
}
