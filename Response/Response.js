class Response {
  static ok = (data) => {
    return {
      success: true,
      data,
    }
  }
}

module.exports = Response