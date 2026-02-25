import 'package:flutter/material.dart';

@immutable
class CareerEvent {
  const CareerEvent({
    required this.year,
    required this.title,
    required this.description,
    required this.icon,
    this.company,
    this.location,
  });
  final int year;
  final String title;
  final String description;
  final IconData icon;
  final String? company;
  final String? location;

  static List<CareerEvent> get sampleEvents => [
    const CareerEvent(
      year: 2019,
      title: 'Freelancer',
      description:
          'Started career in web design, web development, UI/UX design, and digital marketing.',
      icon: Icons.code,
      company: 'Upwork.',
      location: 'Kathmandu, Nepal',
    ),
    const CareerEvent(
      year: 2024,
      title: 'Flutter Developer Intern',
      description:
          'Developed cross-platform mobile applications using Flutter and Dart.',
      icon: Icons.code,
      company: 'PopupBits',
      location: 'Kathmandu, Nepal',
    ),
    const CareerEvent(
      year: 2025,
      title: 'Flutter Internship Traineer',
      description:
          'Expanded skills in mobile development fundamentals and best practices.',
      icon: Icons.code,
      company: 'PopupBits',
      location: 'Kathmandu, Nepal',
    ),
    const CareerEvent(
      year: 2025,
      title: 'Junior Software Developer',
      description:
          'Contributed to full-stack development projects, working across both web and mobile platforms.',
      icon: Icons.code,
      company: 'Awddel Holdings',
      location: 'Kathmandu, Nepal',
    ),
    const CareerEvent(
      year: 2025,
      title: 'Android Developer',
      description:
          'Specialized in native Android development and working with Kotlin and Java.',
      icon: Icons.android,
      company: 'Awddel Holdings',
      location: 'Kathmandu, Nepal',
    ),
    CareerEvent(
      year: DateTime.now().year,
      title: 'Continuous Growth & Learning',
      description:
          'Working on personal projects, AI automation, Azure cloud, and exploring new technologies to stay at the forefront of the industry.',
      icon: Icons.auto_awesome,
    ),
  ];

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is CareerEvent &&
          runtimeType == other.runtimeType &&
          year == other.year &&
          title == other.title &&
          description == other.description &&
          icon == other.icon &&
          company == other.company &&
          location == other.location;

  @override
  int get hashCode =>
      year.hashCode ^ title.hashCode ^ description.hashCode ^ icon.hashCode ^ company.hashCode ^ location.hashCode;

  @override
  String toString() => 'CareerEvent(year: $year, title: $title, company: $company)';
}
