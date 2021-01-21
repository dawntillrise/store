  <script>
    function uploadFile() {
        
      const UPLOAD_FILE_SIZE_LIMIT = 10 * 1024 * 1024;
      var ACCESS_TOKEN = 'A_N0muv3EwwAAAAAAAAAAQnAu7s3Arwp9FXXjaM2xWH3_wMp9Fe1FWv8eglps_aC';
      var dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });
      var fileInput = document.getElementById('file-upload');
      var file = fileInput.files[0];
      
      
      if (file.size < UPLOAD_FILE_SIZE_LIMIT) { // File is smaller than 10 Mb - use filesUpload API
        dbx.filesUpload({path: '/' + file.name, contents: file})
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.error(error);
          });
      } 
      return false;
    }

    function downloadFile() {
      var ACCESS_TOKEN = document.getElementById('access-token').value;
      var SHARED_LINK = document.getElementById('shared-link').value;
      var dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });
      dbx.sharingGetSharedLinkFile({url: SHARED_LINK})
        .then(function(data) {
          var downloadUrl = URL.createObjectURL(data.fileBlob);
          var downloadButton = document.createElement('a');
          downloadButton.setAttribute('href', downloadUrl);
          downloadButton.setAttribute('download', data.name);
          downloadButton.setAttribute('class', 'button');
          downloadButton.innerText = 'Download: ' + data.name;
          document.getElementById('results').appendChild(downloadButton);
        })
        .catch(function(error) {
          console.error(error);
        });
      return false;
    }
  </script>

  <script>
    import axios from 'axios';
    export default {
        data() {
            return {
                product: {
                }
            }
        },
         methods: {
             
            function uploadFile() {
    
                const UPLOAD_FILE_SIZE_LIMIT = 10 * 1024 * 1024;
                var ACCESS_TOKEN = 'A_N0muv3EwwAAAAAAAAAAQnAu7s3Arwp9FXXjaM2xWH3_wMp9Fe1FWv8eglps_aC';
                var dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });
                var fileInput = document.getElementById('file-upload');
                var file = fileInput.files[0];
                
                
                if (file.size < UPLOAD_FILE_SIZE_LIMIT) { // File is smaller than 10 Mb - use filesUpload API
                    dbx.filesUpload({path: '/' + file.name, contents: file})
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
                } 
                return false;
                }

                function downloadFile() {
                var ACCESS_TOKEN = document.getElementById('access-token').value;
                var SHARED_LINK = document.getElementById('shared-link').value;
                var dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });
                dbx.sharingGetSharedLinkFile({url: SHARED_LINK})
                    .then(function(data) {
                    var downloadUrl = URL.createObjectURL(data.fileBlob);
                    var downloadButton = document.createElement('a');
                    downloadButton.setAttribute('href', downloadUrl);
                    downloadButton.setAttribute('download', data.name);
                    downloadButton.setAttribute('class', 'button');
                    downloadButton.innerText = 'Download: ' + data.name;
                    document.getElementById('results').appendChild(downloadButton);
                    })
                    .catch(function(error) {
                    console.error(error);
                    });
                return false;
                }
        }
        
    }
</script>