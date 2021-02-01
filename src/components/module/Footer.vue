<template>
  <div class="footer">
      <div class="copyright">
          2020 Zwallet. All right reserved.
        </div>
        <div class="contact-number">
            +62 0000 0000 0000 <span class="contact-email">zwalletbanking@gmail.com</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
    position: relative;
    background: #6379F4;;
    height: 100px;
    font-weight: normal;
    font-size: 16px;
    color: rgba(239, 239, 239, 0.9);
}
.copyright{
    position: absolute;
    top: 35%;
    left: 5%;
}
.contact-number {
    position: absolute;
    top: 35%;
    right: 5%;
}
.contact-email {
    margin-left: 50px;
}

@media screen and (max-width: 767px) {
    .copyright{
        position: absolute;
        top: 10%;
        left: 5%;
    }
    .contact-number {
        position: absolute;
        top: 40%;
        left: 5%;
    }
    .contact-email {
        margin-left: 50px;
    }
}

@media screen and (max-width: 450px) {
    .contact-email {
        margin-left: 0;
    }
}

</style>
