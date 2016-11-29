describe("youtubeComponent", function () {
    var mvcTestArray, testModel, testController, testView,
        testObject;
    beforeEach(function () {
        localStorage.clear();
        mvcTestArray = [];
        mvcTestArray = mvc();
        testModel = mvcTestArray[0];
        testController = mvcTestArray[1];
        testView = mvcTestArray[2];
        testObject1 = {
            title: "Video #1",
            image: "test/url1.html",
            id: "12345",
            desc: "This is a test video 1"
        };
        testObject2 = {
            title: "Video #2",
            image: "test/url1.html",
            id: "12345",
            desc: "This is a test video 2"
        };
        testModel.localStorageReset();
    });
    it(
        "should have localStorage be undefined before it starts",
        function () {
            localStorage.clear(); //resetting the changes to localStorage by previous calls
            expect(localStorage.videos)
                .toEqual(undefined); //testing the state of localStorage before anything is called
        });
    it(
        "should have localStorage be '[]' {testing: model.localStorageReset()}",
        function () {
            testModel.add(testObject1);
            testModel.localStorageReset(); //model.localStorageReset() being tested
            expect(localStorage.videos)
                .toEqual('[]');
        });
    it(
        "should have localStorage be populated with test testobject1 {testing: model.add()}",
        function () {
            testModel.add(testObject1); //model.add() being tested
            expect(localStorage.videos)
                .toEqual(JSON.stringify([testObject1]));
        });

    it(
        "should have localStorage consist of an array of testObject1 and testObject2 {testing: model.getAllVideos()}",
        function () {
            testModel.add(testObject1);
            testModel.add(testObject2);
            expect(testModel.getAllVideos())
                .toEqual([testObject1, testObject2]); //model.getAllVideos() being tested
        });
    it(
        "should have localStorage consist of an empty array {testing: model.getAllVideos()}",
        function () {
            testModel.getAllVideos();
            expect(localStorage.videos)
                .toEqual('[]');
        });
    it(
        "should have localStorage be '[]' {testing: model.init()}",
        function () {
            localStorage.clear(); //resetting the changes to localStorage by previous calls
            testModel.init(); //model.init() being tested
            expect(localStorage.videos)
                .toEqual('[]');
            expect(localStorage.selectedVideoNumber)
                .toEqual('{}');
        });
    it(
        "should have localStorage.selectedVideoNumber be '{}' {testing: model.init()}",
        function () {
            localStorage.clear(); //resetting the changes to localStorage by previous calls
            localStorage.videos = JSON.stringify([]);
            testModel.init(); //model.init() being tested
            expect(localStorage.selectedVideoNumber)
                .toEqual('{}');
        });
    it(
        "should return the list of added test objects  {testing: controller.getVideos()}",
        function () {
            spyOn(testController,'init');
            testController.init();
            expect(testController.init).toHaveBeenCalled();
        });
    it(
        "should set up YoutubeAPI {testing: controller.setUpYoutubeAPI()}",
        function () {
            localStorage.clear(); //resetting the changes to localStorage by previous calls
            //TO-do
        });

    it(
        "should add the correct test object {testing: controller.addVideo()}",
        function () {
          testController.addVideo("Video #1", "test/url1.html", "12345", "This is a test video 1");
          expect(localStorage.videos)
              .toEqual(JSON.stringify([testObject1]));
        });

    it(
        "should return the list of added test objects  {testing: controller.getVideos()}",
        function () {
          testModel.add(testObject1)
          expect(testController.getVideos())
              .toEqual([testObject1]);
        });
    it(
        "should have localStorage equal to '[]'  {testing: controller.clearLocalStorage()}",
        function () {
          testModel.add(testObject1)
          expect(localStorage.videos)
              .toEqual(JSON.stringify([testObject1]));
          testController.clearLocalStorage();
          expect(localStorage.videos)
              .toEqual('[]');
        });
    it(
        "should return the list of added test objects  {testing: controller.getVideos()}",
        function () {
          spyOn(testView,'init');
          testView.init();
          expect(testView.init).toHaveBeenCalled();
      });
});
