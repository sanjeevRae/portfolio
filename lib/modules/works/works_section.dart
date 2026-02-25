import 'package:flutter/material.dart';
import 'package:flutter_tilt/flutter_tilt.dart';
import 'package:polymorphism/core/constant.dart';
import 'package:polymorphism/core/theme/app_theme.dart';

enum ProjectType { mobile, desktop }

class WorksSection extends StatefulWidget {
  const WorksSection({super.key, this.scrollController});

  final ScrollController? scrollController;

  @override
  State<WorksSection> createState() => _WorksSectionState();
}

class _WorksSectionState extends State<WorksSection> {
  double _headerScrollOffset = 0;
  double _textWidth = 0;
  late final GlobalKey _worksKey;
  late final GlobalKey _textKey;

  @override
  void initState() {
    super.initState();
    _worksKey = GlobalKey();
    _textKey = GlobalKey();
    widget.scrollController?.addListener(_updateHeaderScroll);

    WidgetsBinding.instance.addPostFrameCallback((_) {
      _calculateTextWidth();
    });
  }

  @override
  void didUpdateWidget(WorksSection oldWidget) {
    super.didUpdateWidget(oldWidget);
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _calculateTextWidth();
    });
  }

  @override
  void dispose() {
    widget.scrollController?.removeListener(_updateHeaderScroll);
    super.dispose();
  }

  void _calculateTextWidth() {
    final textContext = _textKey.currentContext;
    if (textContext != null) {
      final textBox = textContext.findRenderObject() as RenderBox?;
      if (textBox != null) {
        setState(() {
          _textWidth = textBox.size.width;
        });
      }
    }
  }

  void _updateHeaderScroll() {
    if (!mounted || widget.scrollController == null || !widget.scrollController!.hasClients) {
      return;
    }

    final worksContext = _worksKey.currentContext;
    if (worksContext == null) {
      return;
    }

    final worksBox = worksContext.findRenderObject() as RenderBox?;
    if (worksBox == null) {
      return;
    }

    final worksPosition = worksBox.localToGlobal(Offset.zero);
    final screenHeight = MediaQuery.of(context).size.height;
    final screenWidth = MediaQuery.of(context).size.width;
    final scrollPosition = widget.scrollController!.offset;

    final worksTop = worksPosition.dy + scrollPosition;
    final worksBottom = worksTop + worksBox.size.height;

    final viewportTop = scrollPosition;
    final viewportBottom = scrollPosition + screenHeight;

    if (worksTop <= viewportBottom && worksBottom >= viewportTop) {
      final sectionProgress = ((scrollPosition - (worksTop - screenHeight)) / (worksBox.size.height + screenHeight))
          .clamp(0.0, 1.0);

      final maxScrollDistance =
          (_textWidth > screenWidth) ? (_textWidth - screenWidth + horizontalPadding(context) * 4) * 1.1 : 0.0;

      setState(() {
        _headerScrollOffset = sectionProgress * maxScrollDistance;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 768;

    return SizedBox(
      key: _worksKey,
      width: double.infinity,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildHeader(context),
          if (isMobile) ...[
            _buildProject(
              context,
              'BIGDEAL .NET ECOMMERCE',
              'A robust, desktop-based application built for business management – developed for modern enterprises. Bigdeal .NET brings a powerful, professional interface to essential commerce operations. Something that delivers reliability, clarity, and seamless control.',
              'assets/images/works/project1-1.png',
              ProjectType.desktop,
            ),
            _buildProject(
              context,
              'WHAT2EAT MOBILE APP',
              'An intuitive and essential food ordering app built for modern consumers. Designed for seamless, real-time menu browsing and order tracking, it helps customers discover, customize, and receive their meals faster. Tasty design meets everyday functionality—because when you’re hungry, every second (and every tap) counts.',
              'assets/images/works/project3-1.png',
              ProjectType.mobile,
            ),
            _buildProject(
              context,
              'Bigdeal WebApp',
              'A modern e-commerce solution built to empower online businesses. Designed to manage the heart of retail operations with a more scalable, efficient, and user-friendly approach. Bigdeal Webapp brings a fresh layer of clarity and performance to complex sales while keeping all the reliability merchants depend on.',
              'assets/images/works/project2-1.png',
              ProjectType.desktop,
            ),
            _buildProject(
              context,
              'MINA APP',
              'A telemedicine Mobile Application.',
              'assets/images/works/project4-1.png',
              ProjectType.mobile,
            ),
            _buildProject(
              context,
              'E-VOX',
              'Digital Business Card Solution.',
              'assets/images/works/project6-1.png',
              ProjectType.desktop,
            ),
            _buildProject(
              context,
              'Laijau',
              'Ride Sharing Mobile APP.',
              'assets/images/works/project5-1.png',
              ProjectType.mobile,
            ),
          ] else ...[
            _buildProject(
              context,
              'BIGDEAL .NET ECOMMERCE',
              'A robust, desktop-based application built for business management – developed for modern enterprises. Bigdeal .NET brings a powerful, professional interface to essential commerce operations. Something that delivers reliability, clarity, and seamless control.',
              'assets/images/works/project1-1.png',
              ProjectType.desktop,
            ),
            _buildProject(
              context,
              'WHAT2EAT MOBILE APP',
              'An intuitive and essential food ordering app built for modern consumers. Designed for seamless, real-time menu browsing and order tracking, it helps customers discover, customize, and receive their meals faster. Tasty design meets everyday functionality—because when you’re hungry, every second (and every tap) counts.',
              'assets/images/works/project3-1.png',
              ProjectType.mobile,
            ),
            _buildProject(
              context,
              'Bigdeal WebApp',
              'A modern e-commerce solution built to empower online businesses. Designed to manage the heart of retail operations with a more scalable, efficient, and user-friendly approach. Bigdeal Webapp brings a fresh layer of clarity and performance to complex sales while keeping all the reliability merchants depend on.',
              'assets/images/works/project2-1.png',
              ProjectType.desktop,
            ),
            _buildProject(
              context,
              'MINA APP',
              'A seamless telemedicine platform that brings healthcare consultations fully online—from symptom check to prescription. Built to simplify and speed up medical access for patients, while giving doctors a smarter way to manage care and consultations. MINA makes getting well feel less like a waiting room and more like progress.',
              'assets/images/works/project4-1.png',
              ProjectType.mobile,
            ),
            _buildProject(
              context,
              'E-VOX',
              "An all-in-one digital business card solution built to transform contact sharing from lead capture to networking analytics. Designed for seamless professional interactions, whether you're at a conference, a meeting, or connecting online. EVOX brings innovation, convenience, and a modern edge to the essential exchange of who you are and what you do.",
              'assets/images/works/project6-1.png',
              ProjectType.desktop,
            ),
            _buildProject(
              context,
              'Laijau',
              "A digital platform that brings the convenience of on-demand rides to your fingertips. Built to simplify the booking process, manage trips, and ensure a safe, reliable experience for all users. Whether you're commuting or exploring, Laijau makes getting from A to B feel accessible, seamless, and just a little more freeing.",
              'assets/images/works/project5-1.png',
              ProjectType.mobile,
            ),
          ],
        ],
      ),
    );
  }

  Widget _buildHeader(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 768;

    return Container(
      width: double.maxFinite,
      height: screenHeight(context) * (isMobile ? 0.5 : 0.7),
      decoration: const BoxDecoration(
        image: DecorationImage(image: AssetImage('assets/images/paper.png'), fit: BoxFit.cover),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            height: screenHeight(context) * (isMobile ? 0.35 : 0.65),
            child: SingleChildScrollView(
              physics: const NeverScrollableScrollPhysics(),
              scrollDirection: Axis.horizontal,
              child: Transform.translate(
                offset: Offset(-_headerScrollOffset, 0), // Apply horizontal scroll offset
                child: Container(
                  alignment: Alignment.center,
                  padding: EdgeInsets.only(left: horizontalPadding(context) * .3),
                  height: screenHeight(context) * (isMobile ? 0.35 : 0.65),
                  child: Text(
                    key: _textKey,
                    'PIXELS WITH PURPOSE PIXELS WITH PURPOSE PIXELS WITH PURPOSE',
                    style: Theme.of(context).textTheme.displayLarge!.copyWith(
                      color: AppColors.bgDark,
                      fontWeight: FontWeight.w900,
                      fontSize: isMobile ? 80 : 180,
                    ),
                  ),
                ),
              ),
            ),
          ),
          Expanded(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: horizontalPadding(context)),
              child: isMobile ? _buildMobileHeaderContent(context) : _buildDesktopHeaderContent(context),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDesktopHeaderContent(BuildContext context) => Row(
    mainAxisAlignment: MainAxisAlignment.spaceBetween,
    children: [
      SizedBox(
        width: screenWidth(context) * .15,
        child: Text(
          '(Works.)',
          style: Theme.of(context).textTheme.bodyLarge?.copyWith(color: AppColors.bgDark, fontWeight: FontWeight.bold),
        ),
      ),
      Text(
        'This flow is a story, built to solve and simplify.',
        style: Theme.of(context).textTheme.bodyLarge?.copyWith(color: AppColors.bgDark, fontWeight: FontWeight.bold),
      ),
      SizedBox(width: screenWidth(context) * .15),
    ],
  );

  Widget _buildMobileHeaderContent(BuildContext context) => Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(
        '(Works.)',
        style: Theme.of(
          context,
        ).textTheme.bodyLarge?.copyWith(color: AppColors.bgDark, fontWeight: FontWeight.bold, fontSize: 16),
      ),
      const SizedBox(height: 8),
      Text(
        'This flow is a story, built to solve and simplify.',
        style: Theme.of(
          context,
        ).textTheme.bodyMedium?.copyWith(color: AppColors.bgDark, fontWeight: FontWeight.bold, fontSize: 14),
        textAlign: TextAlign.center,
      ),
    ],
  );

  Widget _buildProject(
    BuildContext context,
    String title,
    String description,
    String imagePath,
    ProjectType projectType,
  ) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 768;

    if (isMobile) {
      return _buildMobileLayout(context, title, description, imagePath, projectType);
    } else {
      return projectType == ProjectType.mobile
          ? _buildDesktopMobileProjectLayout(context, title, description, imagePath)
          : _buildDesktopLayout(context, title, description, imagePath);
    }
  }

  Widget _buildMobileLayout(
    BuildContext context,
    String title,
    String description,
    String imagePath,
    ProjectType projectType,
  ) => LayoutBuilder(
    builder:
        (context, constraints) => Container(
          padding: EdgeInsets.symmetric(vertical: verticalPadding(context), horizontal: horizontalPadding(context)),
          decoration: const BoxDecoration(
            color: AppColors.bgDark,
            image: DecorationImage(image: AssetImage('assets/images/workBg.png'), fit: BoxFit.cover),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.symmetric(vertical: verticalPadding(context) * 0.5),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: Theme.of(context).textTheme.headlineLarge!.copyWith(
                        color: AppColors.bgDark,
                        fontWeight: FontWeight.w700,
                        fontSize: 24,
                      ),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      description,
                      style: Theme.of(
                        context,
                      ).textTheme.bodyLarge!.copyWith(color: AppColors.bgDark, fontSize: 14, height: 1.4),
                    ),
                  ],
                ),
              ),
              Center(
                child: SizedBox(
                  height: screenHeight(context) * 0.4,
                  width: screenWidth(context) * 0.85,
                  child:
                      projectType == ProjectType.mobile
                          ? _ProjectImageCarouselMobile(
                            imagePaths: [
                              imagePath,
                              imagePath.replaceAll('-1.', '-2.'),
                              imagePath.replaceAll('-1.', '-3.'),
                            ],
                          )
                          : _ProjectImageCarousel(
                            imagePaths: [
                              imagePath,
                              imagePath.replaceAll('-1.', '-2.'),
                              imagePath.replaceAll('-1.', '-3.'),
                            ],
                          ),
                ),
              ),
              SizedBox(height: verticalPadding(context) * 0.5),
            ],
          ),
        ),
  );

  Widget _buildDesktopLayout(BuildContext context, String title, String description, String imagePath) => LayoutBuilder(
    builder:
        (context, constraints) => Container(
          height: screenHeight(context),
          width: double.infinity,
          padding: EdgeInsets.symmetric(vertical: verticalPadding(context), horizontal: horizontalPadding(context)),
          decoration: const BoxDecoration(
            color: AppColors.bgDark,
            image: DecorationImage(image: AssetImage('assets/images/workBg.png'), fit: BoxFit.cover),
          ),
          child: Row(
            children: [
              SizedBox(
                width: screenWidth(context) * .15,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(height: verticalPadding(context) * 2),
                    Text(
                      title,
                      style: Theme.of(context).textTheme.headlineLarge!.copyWith(
                        color: AppColors.bgDark,
                        fontWeight: FontWeight.w700,
                        fontSize: 28,
                      ),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      description,
                      style: Theme.of(context).textTheme.bodyLarge!.copyWith(color: AppColors.bgDark, fontSize: 16),
                    ),
                  ],
                ),
              ),
              SizedBox(width: screenWidth(context) * .03),
              Expanded(
                child: _ProjectImageCarousel(
                  imagePaths: [imagePath, imagePath.replaceAll('-1.', '-2.'), imagePath.replaceAll('-1.', '-3.')],
                ),
              ),
            ],
          ),
        ),
  );

  Widget _buildDesktopMobileProjectLayout(BuildContext context, String title, String description, String imagePath) =>
      LayoutBuilder(
        builder:
            (context, constraints) => Container(
              height: screenHeight(context),
              width: double.infinity,
              padding: EdgeInsets.symmetric(vertical: verticalPadding(context), horizontal: horizontalPadding(context)),
              decoration: const BoxDecoration(
                color: AppColors.bgDark,
                image: DecorationImage(image: AssetImage('assets/images/workBg.png'), fit: BoxFit.cover),
              ),
              child: Row(
                children: [
                  SizedBox(
                    width: screenWidth(context) * .18,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(height: verticalPadding(context) * 2),
                        Text(
                          title,
                          style: Theme.of(context).textTheme.headlineLarge!.copyWith(
                            color: AppColors.bgDark,
                            fontWeight: FontWeight.w700,
                            fontSize: 28,
                          ),
                        ),
                        const SizedBox(height: 10),
                        Text(
                          description,
                          style: Theme.of(context).textTheme.bodyLarge!.copyWith(color: AppColors.bgDark, fontSize: 16),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(width: screenWidth(context) * .03),
                  Expanded(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        Tilt(
                          child: Image.asset(
                            imagePath,
                            fit: BoxFit.contain,
                            height: screenHeight(context) * 0.7,
                            errorBuilder:
                                (context, error, stackTrace) => Container(
                                  height: screenHeight(context) * 0.7,
                                  width: 200,
                                  color: AppColors.bgDark.withValues(alpha: 0.1),
                                  child: const Icon(Icons.image_not_supported, color: AppColors.textPrimary),
                                ),
                          ),
                        ),
                        Tilt(
                          child: Image.asset(
                            imagePath.replaceAll('-1.', '-2.'),
                            fit: BoxFit.contain,
                            height: screenHeight(context) * 0.7,
                            errorBuilder:
                                (context, error, stackTrace) => Container(
                                  height: screenHeight(context) * 0.7,
                                  width: 200,
                                  color: AppColors.bgDark.withValues(alpha: 0.1),
                                  child: const Icon(Icons.image_not_supported, color: AppColors.textPrimary),
                                ),
                          ),
                        ),
                        Tilt(
                          child: Image.asset(
                            imagePath.replaceAll('-1.', '-3.'),
                            fit: BoxFit.contain,
                            height: screenHeight(context) * 0.7,
                            errorBuilder:
                                (context, error, stackTrace) => Container(
                                  height: screenHeight(context) * 0.7,
                                  width: 200,
                                  color: AppColors.bgDark.withValues(alpha: 0.1),
                                  child: const Icon(Icons.image_not_supported, color: AppColors.textPrimary),
                                ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
      );
}

class _ProjectImageCarousel extends StatefulWidget {
  const _ProjectImageCarousel({required this.imagePaths});

  final List<String> imagePaths;

  @override
  State<_ProjectImageCarousel> createState() => _ProjectImageCarouselState();
}

class _ProjectImageCarouselState extends State<_ProjectImageCarousel> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;
    final isMobile = screenWidth < 768;

    return SizedBox(
      height: isMobile ? screenHeight * 0.4 : screenHeight * 0.8,
      width: isMobile ? screenWidth * 0.85 : screenWidth * 0.7,
      child: Column(
        children: [
          Expanded(
            child: Stack(
              children: [
                PageView.builder(
                  physics: const NeverScrollableScrollPhysics(),
                  clipBehavior: Clip.none,
                  controller: _pageController,
                  onPageChanged: (index) {
                    setState(() {
                      _currentPage = index;
                    });
                  },
                  itemCount: widget.imagePaths.length,
                  itemBuilder:
                      (context, index) => Container(
                        margin: EdgeInsets.symmetric(horizontal: isMobile ? 4 : 8, vertical: isMobile ? 4 : 8),
                        child: Tilt(
                          child: Image.asset(
                            widget.imagePaths[index],
                            fit: BoxFit.contain,
                            width: isMobile ? screenWidth * 0.85 : screenWidth * 0.7,
                            errorBuilder:
                                (context, error, stackTrace) => Container(
                                  width: isMobile ? screenWidth * 0.85 : screenWidth * 0.7,
                                  height: 200,
                                  color: AppColors.bgDark.withValues(alpha: 0.1),
                                  child: const Icon(Icons.image_not_supported, color: AppColors.textPrimary),
                                ),
                          ),
                        ),
                      ),
                ),

                if (_currentPage > 0)
                  Positioned(
                    left: isMobile ? 8 : 16,
                    top: 0,
                    bottom: 0,
                    child: Center(
                      child: GestureDetector(
                        onTap: () {
                          _pageController.previousPage(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeInOut,
                          );
                        },
                        child: Container(
                          width: isMobile ? 32 : 40,
                          height: isMobile ? 32 : 40,
                          decoration: BoxDecoration(
                            color: AppColors.bgDark.withValues(alpha: 0.7),
                            shape: BoxShape.circle,
                          ),
                          child: Icon(
                            Icons.chevron_left,
                            color: Colors.white.withValues(alpha: 0.8),
                            size: isMobile ? 20 : 24,
                          ),
                        ),
                      ),
                    ),
                  ),

                if (_currentPage < widget.imagePaths.length - 1)
                  Positioned(
                    right: isMobile ? 8 : 16,
                    top: 0,
                    bottom: 0,
                    child: Center(
                      child: GestureDetector(
                        onTap: () {
                          _pageController.nextPage(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeInOut,
                          );
                        },
                        child: Container(
                          width: isMobile ? 32 : 40,
                          height: isMobile ? 32 : 40,
                          decoration: BoxDecoration(
                            color: AppColors.bgDark.withValues(alpha: 0.7),
                            shape: BoxShape.circle,
                          ),
                          child: Icon(
                            Icons.chevron_right,
                            color: Colors.white.withValues(alpha: 0.8),
                            size: isMobile ? 20 : 24,
                          ),
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),

          SizedBox(height: isMobile ? 12 : 16),

          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: List.generate(
              widget.imagePaths.length,
              (index) => GestureDetector(
                onTap: () {
                  _pageController.animateToPage(
                    index,
                    duration: const Duration(milliseconds: 300),
                    curve: Curves.easeInOut,
                  );
                },
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  margin: EdgeInsets.symmetric(horizontal: isMobile ? 3 : 4),
                  width: _currentPage == index ? (isMobile ? 24 : 32) : (isMobile ? 6 : 8),
                  height: isMobile ? 6 : 8,
                  decoration: BoxDecoration(
                    color:
                        _currentPage == index
                            ? AppColors.bgDark.withValues(alpha: 0.8)
                            : AppColors.bgDark.withValues(alpha: 0.3),
                    borderRadius: BorderRadius.circular(4),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _ProjectImageCarouselMobile extends StatefulWidget {
  const _ProjectImageCarouselMobile({required this.imagePaths});

  final List<String> imagePaths;

  @override
  State<_ProjectImageCarouselMobile> createState() => _ProjectImageCarouselMobileState();
}

class _ProjectImageCarouselMobileState extends State<_ProjectImageCarouselMobile> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final screenHeight = MediaQuery.of(context).size.height;
    final isMobile = screenWidth < 768;

    return SizedBox(
      height: isMobile ? screenHeight * 0.4 : screenHeight * 0.8,
      width: isMobile ? screenHeight * 0.25 : screenHeight * 0.45, // Portrait ratio based on height
      child: Column(
        children: [
          Expanded(
            child: Stack(
              children: [
                PageView.builder(
                  physics: const NeverScrollableScrollPhysics(),
                  clipBehavior: Clip.none,
                  controller: _pageController,
                  onPageChanged: (index) {
                    setState(() {
                      _currentPage = index;
                    });
                  },
                  itemCount: widget.imagePaths.length,
                  itemBuilder:
                      (context, index) => Container(
                        margin: EdgeInsets.symmetric(horizontal: isMobile ? 4 : 8, vertical: isMobile ? 4 : 8),
                        child: Tilt(
                          child: Image.asset(
                            widget.imagePaths[index],
                            fit: BoxFit.contain,
                            height: isMobile ? screenHeight * 0.4 : screenHeight * 0.8,
                            errorBuilder:
                                (context, error, stackTrace) => Container(
                                  height: isMobile ? screenHeight * 0.4 : screenHeight * 0.8,
                                  width: 200,
                                  color: AppColors.bgDark.withValues(alpha: 0.1),
                                  child: const Icon(Icons.image_not_supported, color: AppColors.textPrimary),
                                ),
                          ),
                        ),
                      ),
                ),

                if (_currentPage > 0)
                  Positioned(
                    left: isMobile ? 8 : 16,
                    top: 0,
                    bottom: 0,
                    child: Center(
                      child: GestureDetector(
                        onTap: () {
                          _pageController.previousPage(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeInOut,
                          );
                        },
                        child: Container(
                          width: isMobile ? 32 : 40,
                          height: isMobile ? 32 : 40,
                          decoration: BoxDecoration(
                            color: AppColors.bgDark.withValues(alpha: 0.7),
                            shape: BoxShape.circle,
                          ),
                          child: Icon(
                            Icons.chevron_left,
                            color: Colors.white.withValues(alpha: 0.8),
                            size: isMobile ? 20 : 24,
                          ),
                        ),
                      ),
                    ),
                  ),

                if (_currentPage < widget.imagePaths.length - 1)
                  Positioned(
                    right: isMobile ? 8 : 16,
                    top: 0,
                    bottom: 0,
                    child: Center(
                      child: GestureDetector(
                        onTap: () {
                          _pageController.nextPage(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeInOut,
                          );
                        },
                        child: Container(
                          width: isMobile ? 32 : 40,
                          height: isMobile ? 32 : 40,
                          decoration: BoxDecoration(
                            color: AppColors.bgDark.withValues(alpha: 0.7),
                            shape: BoxShape.circle,
                          ),
                          child: Icon(
                            Icons.chevron_right,
                            color: Colors.white.withValues(alpha: 0.8),
                            size: isMobile ? 20 : 24,
                          ),
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),

          SizedBox(height: isMobile ? 12 : 16),

          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: List.generate(
              widget.imagePaths.length,
              (index) => GestureDetector(
                onTap: () {
                  _pageController.animateToPage(
                    index,
                    duration: const Duration(milliseconds: 300),
                    curve: Curves.easeInOut,
                  );
                },
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  margin: EdgeInsets.symmetric(horizontal: isMobile ? 3 : 4),
                  width: _currentPage == index ? (isMobile ? 24 : 32) : (isMobile ? 6 : 8),
                  height: isMobile ? 6 : 8,
                  decoration: BoxDecoration(
                    color:
                        _currentPage == index
                            ? AppColors.bgDark.withValues(alpha: 0.8)
                            : AppColors.bgDark.withValues(alpha: 0.3),
                    borderRadius: BorderRadius.circular(4),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
