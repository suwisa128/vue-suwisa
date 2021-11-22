<template>
  <h1 class="font-black mb-3">Devices</h1>
  <div class="grid grid-cols-3 gap-4 border border-black ml-0 mr-5 p-3">
    <ul v-for="device in devices" :key="devices.id">
      <li>
        <router-link
          :to="{
            name: 'device',
            params: { id: device.id },
          }"
        >
          <img :src="device.Photo" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    manufacturerId: Number,
  },
  data() {
    return {
      devices: [
        { id: 1, DeviceName: 'DELL XP13' },
        { id: 2, DeviceName: 'ASUS REG' },
      ],
    };
  },
  created() {
    console.log('props: ', this.manufacturerId);
    if (this.manufacturerId !== 0) {
      axios
        .get(
          `https://service2.ahead-coop.work/devices?ManufacturerID=${this.manufacturerId}`
        )
        .then((res) => {
          this.devices = res.data;
        });
    } else {
      axios.get(`https://service2.ahead-coop.work/devices`).then((res) => {
        this.devices = res.data;
      });
    }
  },
  watch: {
    manufacturerId: function (newId, oldId) {
      console.log('Watch: ', newId, ' + ', oldId);
      this.getDeviceByManufacturer(newId);
    },
  },
  methods: {
    getDeviceByManufacturer(id) {
      axios
        .get(
          `https://service2.ahead-coop.work/devices?ManufacturerID=${this.manufacturerId}`
        )
        .then((res) => {
          this.devices = res.data;
        });
    },
  },
};
</script>
