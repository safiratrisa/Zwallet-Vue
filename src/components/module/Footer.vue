<template>
  <div class="footer">
      <div class="copyright">
          2020 Zwallet. All right reserved.
        </div>
        <div class="contact-number">
            +62 5637 8882 9901 <span class="contact-email">contact@zwallet.com</span>
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
    height: 80px;
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
</style>
