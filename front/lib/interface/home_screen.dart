import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/auth_controller.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {

    final AuthController authController = Get.find<AuthController>();

    return Scaffold(

      /// top của home_screen


      appBar: AppBar(
        title: Obx(() {
          final user = authController.userData.value;
          final fullname = user?['full_name'] ?? user?['fullname'] ?? 'bạn';

          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                "Trang chủ",
                style: TextStyle(fontSize: 14),
              ),
              Text(
                "Xin chào $fullname 👋",
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          );
        }),
        actions: [
          IconButton(
            icon: const Icon(Icons.login_outlined),
            onPressed: () {
              authController.logout();
            },
          ),
        ],
      ),


      /// body của home_screen

      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(height: 40),

            const Icon(
              Icons.check_circle,
              color: Colors.green,
              size: 80,
            ),

            const SizedBox(height: 20),

            const Text(
              "🎉 Đăng nhập thành công!",
              style: TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
              ),
            ),

            const SizedBox(height: 10),

            const Text(
              "Đây là màn hình Home cơ bản\nCó header, body và bottom",
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16),
            ),

            const SizedBox(height: 30),



          ],
        ),
      ),

      /// bottom của home_screen


      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 0,
        onTap: (index) {
          // xử lý chuyển tab sau này
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: "Home",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.notifications),
            label: "Thông báo",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: "Tài khoản",
          ),
        ],
      ),
    );
  }
}