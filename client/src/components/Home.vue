<template>
    <div class="vue-tempalte">
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            users: []
        },
        methods: {
        loadUsers(){
            axios.get('https://store-magic.herokuapp.com/api/users')
                .then(function( response ){
                    this.users = response.data;
                    console.warn(response.data);
                }.bind(this));
            }
        }
    }

</script>