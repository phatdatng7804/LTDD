import 'package:flutter/material.dart';
import 'package:front/interface/login_screen.dart';
import 'package:get/get.dart';
import 'controllers/auth_controller.dart';


void main() {
  Get.put(AuthController(), permanent: true);
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      home:  LoginScreen(),
    );
  }
}